
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import dynamic from "next/dynamic"


const Editor =dynamic(
    async () => {
        const module = await import("react-draft-wysiwyg");
        return module.Editor;
    },{
      ssr:false
    }
);

const TextEditor = () => {
    return (
        <div>
          <Editor
          toolbarClassName="mx-8 " 
          />
        </div>
    );
}

export default TextEditor;