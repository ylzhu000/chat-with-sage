import EventEmitter from 'eventemitter3';
import { setupChain } from './index';
import { userId } from '../utils/user';
import { TModelConfig } from '../config/models';

type TAssitantResponsePayload = {
  query: string;
  modelConfig: TModelConfig;
};
export const getAssistantResponse = async ({
  query,
  modelConfig,
}: TAssitantResponsePayload) => {
  const chain = setupChain({ userId, modelConfig });
  const emitter = new EventEmitter(); // setup emitter for streaming
  try {
    chain?.call(
      { input: query },
      {
        callbacks: [
          {
            handleLLMNewToken(token: string) {
              emitter.emit('data', { content: token });
            },
            handleLLMEnd() {
              emitter.emit('data', { content: 'stop' });
            },
            handleLLMError() {
              emitter.emit('error', 'Error when fetching response from openai');
            },
          },
        ],
      }
    );

    return emitter;
  } catch (error) {
    emitter.emit('error', error);
    throw new Error('Error when fetching assistant respone');
  }
};
