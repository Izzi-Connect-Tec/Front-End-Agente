import { useEffect, useRef } from "react"
import "../styles/sentiment.css"

export const Sentiment = () => {

    const endRef = useRef(null)

    useEffect(() => {
        endRef.current?.scrollIntoView({behavior: "smooth"})
    }, [])

    return(
            <div className="container">
                App
                <div className="center">
                    <div className="message">
                        <img src="https://avatars.githubusercontent.com/u/16248328?v=4" alt="" />
                        <div className="texts">
                            <p>
                                Lorem ipsum dolor sit.
                            </p>
                            <span>1 minute ago</span>
                        </div>
                    </div>
                    <div className="message own">
                        <img src="https://avatars.githubusercontent.com/u/16248328?v=4" alt="" />
                        <div className="texts">
                            <p>
                                Lorem ipsum dolor sit.
                            </p>
                            <span>1 minute ago</span>
                        </div>
                    </div>
                    <div className="message">
                        <img src="https://avatars.githubusercontent.com/u/16248328?v=4" alt="" />
                        <div className="texts">
                            <p>
                                Lorem ipsum dolor sit.
                            </p>
                            <span>1 minute ago</span>
                        </div>
                    </div>
                    <div className="message own">
                        <img src="https://avatars.githubusercontent.com/u/16248328?v=4" alt="" />
                        <div className="texts">
                            <p>
                                Lorem ipsum dolor sit.
                            </p>
                            <span>1 minute ago</span>
                        </div>
                    </div>
                    <div className="message own">
                        <img src="https://avatars.githubusercontent.com/u/16248328?v=4" alt="" />
                        <div className="texts">
                            <p>
                                Lorem ipsum dolor sit.
                            </p>
                            <span>1 minute ago</span>
                        </div>
                    </div>
                    <div className="message">
                        <img src="https://avatars.githubusercontent.com/u/16248328?v=4" alt="" />
                        <div className="texts">
                            <p>
                                Lorem ipsum dolor sit.
                            </p>
                            <span>1 minute ago</span>
                        </div>
                    </div>
                    <div className="message">
                        <img src="https://avatars.githubusercontent.com/u/16248328?v=4" alt="" />
                        <div className="texts">
                            <p>
                                Lorem ipsum dolor sit.
                            </p>
                            <span>1 minute ago</span>
                        </div>
                    </div> 
                    <div className="message own">
                        <img src="https://avatars.githubusercontent.com/u/16248328?v=4" alt="" />
                        <div className="texts">
                            <p>
                                Lorem ipsum dolor sit.
                            </p>
                            <span>1 minute ago</span>
                        </div>
                    </div>
                    <div className="message own">
                        <img src="https://avatars.githubusercontent.com/u/16248328?v=4" alt="" />
                        <div className="texts">
                            <p>
                                Lorem ipsum dolor sit.
                            </p>
                            <span>1 minute ago</span>
                        </div>
                    </div>     
                    <div ref={endRef}></div>              
                </div> 
            </div>
    )
}