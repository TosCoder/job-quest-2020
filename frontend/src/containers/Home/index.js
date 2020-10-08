import React, { Fragment, useState, useEffect } from 'react'
import { Row, Col, Card, Button } from 'antd'
import { jokeController } from '../../services'
import { Form, Jokes, ClearJokes } from '../../components'
import { ArrowLeftOutlined } from '@ant-design/icons'
import AOS from "aos";

const Home = () => {
    const [data, setData] = useState({
        fname: '',
        lname: '',
        count: ''
    })

    const [jokes, setJokes] = useState([])

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    const onJoke = async () => {

        const newData = await jokeController().getJokes(data.count, data.fname, data.lname)
        if (newData.status === 200) {
            const dataJokes = newData.data.value
            setJokes(dataJokes)
        }

    }

    const onSpeech = (text) => {
        var msg = new SpeechSynthesisUtterance();
        var voices = window.speechSynthesis.getVoices();

        msg.voice = voices[10];
        msg.volume = 1; // From 0 to 1
        msg.rate = 1; // From 0.1 to 10
        msg.pitch = 1; // From 0 to 2
        msg.text = text;

        console.log(msg)

        window.speechSynthesis.speak(msg);


    }

    const clearJokes = () => {
        setJokes([])
        setData({
            fname: '',
            lname: '',
            count: ''
        })
    }


    return (
        <Fragment>
            <Row justify={jokes.length === 0 && 'center'} align='middle' className='card-center'>
                {jokes.length > 0 ?
                    <Jokes jokes={jokes} onSpeech={onSpeech} />
                    :
                    <Form
                        onJoke={onJoke}
                        setData={setData}
                        data={data}
                    />}
            </Row>
            
            {jokes.length > 0 && <ClearJokes clearJokes={clearJokes} ><ArrowLeftOutlined /></ClearJokes>}
        </Fragment>
    )
}

export default Home