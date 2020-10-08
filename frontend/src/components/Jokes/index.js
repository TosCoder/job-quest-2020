import React from 'react'
import { Col, Card, Button } from 'antd'
import { SoundOutlined } from '@ant-design/icons'

export const Jokes = ({ jokes, onSpeech }) => {
    return (
        jokes.map(item => {
            return (
                <Col key={item.id} lg={8} md={12} xs={24} style={{ padding: '10px' }}>
                        <Card className='card-jokes' data-aos="fade-up" data-aos-duration="1000" >
                            <p>{item.joke}</p>
                            <Button className='btn-read' onClick={() => onSpeech(item.joke)}><SoundOutlined /></Button>
                        </Card>
                </Col>
            )
        })
    )

}
