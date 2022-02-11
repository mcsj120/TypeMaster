import React, { useEffect, useState } from "react"
import Link from "next/link";

function Foo(): JSX.Element {

    const [connection, setConnection] = useState<WebSocket>()
    const [text, setText] = useState("Connecting")
    const [readyForInput, setReadyForInput] = useState<boolean>(false)

    useEffect(()=>{
        const wsUri = "ws://127.0.0.1:8080/ws";
        setConnection(new WebSocket(wsUri));
    },[])

    useEffect(()=>{
        if(connection != null){
            const userInput = document.querySelector("input")
            let startTime: number 

            connection.onopen = (_evt) => {
                setText("Connected to server");
                startTime = Date.now()
                setReadyForInput(true)
            }

            connection.onclose = (_evt) => {
                //setText("Not connected");
            }

            connection.onmessage = (evt: MessageEvent<any>) => {
                if(evt.data == "complete"){ 
                    const time: number = ((Date.now() - startTime) / 1000)
                    setText("Completed! Time: " + time + " seconds\nWPM: " + ((9 * 60)/time).toFixed(2))
                    if(userInput != null){
                        userInput.value = ""
                    }
                    setReadyForInput(false)
                } else if(evt.data == "true"){
                    //If the user has entered in input after it has sent it to the websocket and before the websocket
                    //can respond, this will prevent it from getting deleted
                    if(userInput != null){
                        userInput.value = userInput.value.split(" ").slice(1).join(" ")
                    }
                }
            }

            connection.onerror = (evt) => {
                console.log(evt)
                setText("Communication error");
            }

            const func = (event: KeyboardEvent) => {
                if(userInput != null && (event.key === " " || event.key === "Enter")){
                    connection.send(userInput.value)
                }
            }
            document.addEventListener("keydown", func)
        }
    },[connection])


  return (
    <div>
      <h1>Foo</h1>
      <p>
        This is <code>pages/foo/index.tsx</code>.
      </p>
      <p>This is the text I need you to type.</p>
        <input type="text" readOnly={!readyForInput}></input>
      <p id="status">{text}</p>
      <p>
        Check out <Link href="/foo/bar">bar</Link>.
      </p>
    </div>
  );
}

export default Foo;
