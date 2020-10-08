import React from 'react'
import { Col, Card, Input, Button } from 'antd'

export const Form = ({ onJoke, setData, data }) => {
    return (
        <Card className='card-style' >
            <h1 style={{ textAlign: 'center' }}>WHO ARE YOU</h1>
            <img alt='logo' src={require('../../assets/image/clown.png')} style={{ width: '100%' }} />

            <p style={{ textAlign: 'center',  padding: '30px 0 0 0' }}>
                I want to know, please enter... </p>

            <Col style={{ padding: '0 0 10px 0' }}>
                First name
                <Input id='firstName' autoComplete='off' value={data.fname} onChange={event => setData({ ...data, fname: event.target.value })} />
            </Col>

            <Col style={{ padding: '10px 0' }}>
                Last name
                <Input id='lastName' autoComplete='off' value={data.lname} onChange={event => setData({ ...data, lname: event.target.value })} />
            </Col>

            <Col style={{ padding: '10px 0' }}>
                Number of jokes
                <Input 
                    id='count' 
                    autoComplete='off' 
                    placeholder='Please only number' 
                    value={data.count} 
                    onChange={event => setData({ ...data, count: /^[0-9]/.test(event.target.value) ? event.target.value : ''})} />
            </Col>

            <Col style={{
                padding: '10px 0 0 0 ', justifyContent: 'center',
                display: 'flex'
            }} >
                {console.log(data)}
                {data.fname && data.lname && data.count && <Button className='btn-play' onClick={() => onJoke()}>Let Play!!</Button>}
            </Col>

        </Card>
    )

}
