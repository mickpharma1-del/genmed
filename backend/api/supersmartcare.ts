export type AssistantIntent =
  | 'symptom_to_medicine'
  | 'medicine_alternative'
  | 'dosage_reminder'
  | 'refill_reminder'
  | 'order_help'
  | 'emergency_alert';

export interface AssistantRequest {
  userId: string;
  language: 'en' | 'hi';
  voiceEnabled: boolean;
  intent: AssistantIntent;
  message: string;
}

export interface AssistantResponse {
  text: string;
  suggestions: string[];
  emergency: boolean;
  saveToHistory: boolean;
}

export function processAssistantRequest(request: AssistantRequest): AssistantResponse {
  if (request.intent === 'emergency_alert') {
    return {
      text: request.language === 'hi' ? 'कृपया तुरंत डॉक्टर से संपर्क करें।' : 'Please contact emergency care immediately.',
      suggestions: ['Call nearest hospital', 'Avoid self-medication'],
      emergency: true,
      saveToHistory: true
    };
  }

  return {
    text:
      request.language === 'hi'
        ? 'AI सहायक ने आपकी क्वेरी रिकॉर्ड की है। एडमिन अनुमोदित सुझाव उपलब्ध हैं।'
        : 'AI assistant captured your query. Admin-approved suggestions are available.',
    suggestions: ['Order help', 'Alternative medicine', 'Set refill reminder'],
    emergency: false,
    saveToHistory: true
  };
}
