import { ChatOpenAI } from '@langchain/openai';

export type TModelConfig = {
  modelId?: string;
  apiKey?: string;
  streaming?: boolean;
};

const DEFAULT_MODEL = 'gpt-3.5-turbo';
const DEFAULT_API_KEY = import.meta.env.VITE_APP_OPENAI_API_KEY;

export const getModel = ({ modelId, apiKey, streaming }: TModelConfig) => {
  return new ChatOpenAI({
    apiKey: apiKey || DEFAULT_API_KEY,
    model: modelId || DEFAULT_MODEL,
    streaming: streaming || true,
  });
};
