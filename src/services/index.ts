import { ConversationChain } from 'langchain/chains';
import { BufferMemory } from 'langchain/memory';
import { getModel, TModelConfig } from '../config/models';
import { getPrompt } from '../config/prompts';

export type TChainSetup = {
  modelConfig?: TModelConfig;
  userId: string;
};

// Setup a chain map so it won't create a new chain every time
const chainMap = new Map<string, ConversationChain>();

export const setupChain = ({ userId, modelConfig }: TChainSetup) => {
  if (chainMap.has(userId)) {
    return chainMap.get(userId);
  } else {
    const llm = getModel(modelConfig || {});
    const prompt = getPrompt({});

    const memory = new BufferMemory({
      memoryKey: 'chat_history',
    });
    const newChain = new ConversationChain({
      llm,
      memory,
      prompt,
    });
    chainMap.set(userId, newChain);
    return newChain;
  }
};
