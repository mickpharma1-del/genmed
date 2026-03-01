export async function syncFirebaseUser(req, res) {
  return res.status(200).json({ message: "Auth sync endpoint ready" });
}
