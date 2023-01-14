import React, { useState, useRef,useEffect } from "react";
import style from "./Clipbord.module.css";
import { jsPDF } from "jspdf";


function Clipbord() {
  const [Text, setText] = useState("");
  const ref = useRef();

  const Addtext = async () => {
    navigator.clipboard.readText().then((text) => {
      console.log("Pasted content: ", text);
      setText(<>{Text}<p>{text}</p></>);
      console.log(Text);
    });
  };

  const Addimg = async() => {
    navigator.clipboard.readText().then((text) => {
    console.log('Pasted content: ', text);
      setText(<><>{Text}</><img style={{width:"85vw",maxWidth:"300px"}}src={text} alt="sory" /></>)
    });
  };
  const AddDownload = () => {
    const doc = new jsPDF();
    // doc.text("Hello world! how are you", 10, 10);
    // doc.save("a4.pdf");
    doc.html(ref.current, {
        async callback(doc) {
            await doc.save('hello.pdf');}})

  };


  useEffect(() => {  
    console.log(ref);
    }, [ref])

  return (
    <div>
      <div className={style.container}>
        <div>
          <h1>hello how are you</h1>
          <div className={style.content} ref={ref}>
            <div>{Text}</div>
          </div>
          <button className={style.button} onClick={() => Addtext()}>
            Text
          </button>
          <button className={style.button} onClick={() => Addimg()}>
            img
          </button>
          <button className={style.button} onClick={() => AddDownload()}>
            download
          </button>
        </div>
      </div>
    </div>
  );
}

export default Clipbord;
