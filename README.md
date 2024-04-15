# Customer Support Chatbot - Sage

This project is a chatbot interface designed for Customer Support Agents. It utilizes React and Material-UI (MUI) to provide a dynamic and responsive user experience, with rich text editing features and integration capabilities for chatbot functionalities.

## Features

- **Chat Interface**: Allows agents to enter customer queries and receive responses.
- **Rich Text Editing**: Supports formatting options like bold, italic, underline, lists, and links.
- **OpenAI API Integration**: Fetches and posts data to simulate chatbot interactions.
- **Follow-up Questions**: Supports dynamic follow-up questions.
- **Response Streaming**: Implements real-time response streaming to display chatbot replies as they are being generated, enhancing the interactive experience.
- **Automatic Scrolling**: Automatically scrolls the view to the latest message as new chat messages are added, ensuring the most recent interactions are always visible.
- **Error Handling**: Validates user inputs and provides error messages to assist in troubleshooting.

## Possible Enhancements

- **Interactive Design**: Includes quick reply buttons and dynamic content placeholders to enhance usability.
- **Editable Templates**: Agents can use and modify predefined response templates to streamline communication.
- **Chat History**: Ability to save and retrieve past conversations.
- **LLM Model Configuration**: Settings for language model parameters to tailor response generation.

## Challenges

- **Data Streaming**: Implementation of real-time data streaming was challenging as the Langchain library does not support it out of the box.

## Tech Stack

- **Material-UI (MUI)**: For modern, clean UI components.
- **React**: To build a dynamic and responsive interface.
- **Dompurify**: For HTML content sanitization.
- **Marked**: To convert Markdown to HTML.
- **React-Quill**: For rich text editing capabilities.
- **eventemitter3**: To handle data streaming.
- **notistack**: For error alerts.
- **Prettier**: For code formatting.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (v18.18.0)
- npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/ylzhu000/sage
   ```
2. Navigate to the project directory:
   ```
   cd sage
   ```
3. Install dependencies:

   ```
   yarn install
   ```

4. Create a `.env` file in the root directory and add the following key:
   ```
   VITE_APP_OPENAI_API_KEY=your_openai_api_key_here
   ```

### Running the Application

To start the application, run:

```
yarn run dev
```

This will launch the chatbot UI on `http://localhost:5173`.

## License

Distributed under the MIT License. See `LICENSE` for more information.
