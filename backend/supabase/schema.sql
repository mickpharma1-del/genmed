-- SuperGenKart relational schema (Supabase/Postgres)

create extension if not exists "uuid-ossp";

create table if not exists users (
  id uuid primary key default uuid_generate_v4(),
  mobile text unique,
  email text unique,
  full_name text,
  role text not null default 'customer',
  preferred_language text default 'en',
  created_at timestamptz not null default now()
);

create table if not exists categories (
  id uuid primary key default uuid_generate_v4(),
  name text not null unique,
  slug text not null unique,
  created_at timestamptz not null default now()
);

create table if not exists suppliers (
  id uuid primary key default uuid_generate_v4(),
  supplier_name text not null,
  contact_number text,
  gstin text,
  created_at timestamptz not null default now()
);

create table if not exists products (
  id uuid primary key default uuid_generate_v4(),
  category_id uuid not null references categories(id),
  supplier_id uuid references suppliers(id),
  name text not null,
  sku text not null unique,
  hsn_code text,
  salt text,
  composition text,
  batch_no text,
  expiry_date date,
  purchase_price numeric(10,2),
  mrp numeric(10,2) not null,
  gst_percent numeric(5,2) not null default 0,
  discount_percent numeric(5,2) not null default 0,
  selling_price numeric(10,2) not null,
  profit_margin numeric(5,2) generated always as (
    case when purchase_price is null or purchase_price = 0 then 0
    else ((selling_price - purchase_price) / purchase_price) * 100 end
  ) stored,
  prescription_required boolean not null default false,
  description text,
  side_effects text,
  storage_info text,
  image_url text,
  created_at timestamptz not null default now()
);

create table if not exists inventory (
  id uuid primary key default uuid_generate_v4(),
  product_id uuid not null references products(id),
  batch_no text not null,
  quantity integer not null default 0,
  dead_stock boolean not null default false,
  expiry_date date,
  last_updated timestamptz not null default now()
);

create table if not exists coupons (
  id uuid primary key default uuid_generate_v4(),
  code text not null unique,
  discount_type text not null check (discount_type in ('percent', 'flat')),
  discount_value numeric(10,2) not null,
  max_usage integer,
  used_count integer not null default 0,
  expires_at timestamptz,
  created_at timestamptz not null default now()
);

create table if not exists orders (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid not null references users(id),
  status text not null default 'pending',
  payment_method text not null,
  subtotal numeric(10,2) not null,
  delivery_charge numeric(10,2) not null,
  gst_amount numeric(10,2) not null,
  total_amount numeric(10,2) not null,
  coupon_id uuid references coupons(id),
  address jsonb not null,
  prescription_uploaded boolean not null default false,
  created_at timestamptz not null default now()
);

create table if not exists order_items (
  id uuid primary key default uuid_generate_v4(),
  order_id uuid not null references orders(id) on delete cascade,
  product_id uuid not null references products(id),
  quantity integer not null,
  unit_price numeric(10,2) not null,
  created_at timestamptz not null default now()
);

create table if not exists prescriptions (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid not null references users(id),
  order_id uuid references orders(id),
  file_url text not null,
  verified boolean not null default false,
  created_at timestamptz not null default now()
);

create table if not exists delivery_staff (
  id uuid primary key default uuid_generate_v4(),
  full_name text not null,
  mobile text unique,
  is_active boolean not null default true,
  service_areas text[],
  created_at timestamptz not null default now()
);

create table if not exists ai_logs (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references users(id),
  input_text text not null,
  response_text text not null,
  language text not null default 'en',
  emergency_alert boolean not null default false,
  created_at timestamptz not null default now()
);

create index if not exists idx_products_category on products(category_id);
create index if not exists idx_orders_user on orders(user_id);
create index if not exists idx_inventory_product on inventory(product_id);
