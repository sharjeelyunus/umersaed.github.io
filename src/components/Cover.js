import React from 'react';
import './Cover.css';

const Cover = () => {
    return (
        <div className="cover" id="home">
            <div className="home__text">
                <div>
                    <h1>Hi! I AM</h1>
                    <h1>Umer Saeed</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa corporis <br />
                        quam maiores possimus libero, quasi id esse nisi sint obcaecati, facere <br />
                        dignissimos excepturi unde corrupti doloremque totam tempore? <br />
                        Nemo, quam?
                    </p>
                </div>
                <div className="sociallinks">
                    <ul>
                        <li>
                            <a href="/">
                                <img src="https://firebasestorage.googleapis.com/v0/b/umer-saed.appspot.com/o/fb.png?alt=media&token=2c67e6dd-915a-4e79-b749-da6649adb2a8" alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <img src="https://firebasestorage.googleapis.com/v0/b/umer-saed.appspot.com/o/twitter.png?alt=media&token=9b3518f7-7b87-46a0-b382-60cf24f3a9dc" alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <img src="https://firebasestorage.googleapis.com/v0/b/umer-saed.appspot.com/o/linkedin.png?alt=media&token=65d5af51-b90c-4fef-9aa2-02c4070b57bb" alt="" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="home__cover">
                <img src="https://firebasestorage.googleapis.com/v0/b/umer-saed.appspot.com/o/-k547bt-removebg-preview.png?alt=media&token=da073c71-398b-4406-ac97-9766817c9a90" alt="" />
            </div>
        </div>
    )
}

export default Cover;
