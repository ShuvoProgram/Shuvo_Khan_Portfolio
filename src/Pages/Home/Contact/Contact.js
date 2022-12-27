import { Container, Spacer, Text, Input, useInput, Grid, Textarea } from '@nextui-org/react';
import React, { useMemo, useRef } from 'react';
import Lottie from 'react-lottie-player'
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

import lottieContact from '../../../assets/76038-contact-mail.json'

const Contact = () => {
    const { value, reset, bindings } = useInput("");
    const form = useRef();

    const validateEmail = (value) => {
        return value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
    };
    const helper = useMemo(() => {
        if (!value)
            return {
                text: "",
                color: "",
            };
        const isValid = validateEmail(value);
        return {
            text: isValid ? "Correct email" : "Enter a valid email",
            color: isValid ? "success" : "error",
        };
    }, [value]);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_wnlelxs', 'template_mmt6wxq', form.current, 'tH25W2BnOPNtzkN8K')
            .then((result) => {
                toast.success('Successfully Send Your Email!')
            }, (error) => {
                toast.error(error.text)
            });

            e.target.reset()
    };

    return (
        <div id='Contact'>
            <Container css={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <hr style={{ width: "30%" }} />
                <Spacer x={1} />
                <Text
                    h4
                    size={30}
                    css={{
                        textGradient: "45deg, $purple600 -20%, $pink600 100%",
                    }}
                    weight="semibold"
                >
                    Contact With Me
                </Text>
                <Spacer x={1} />
                <hr style={{ width: "30%" }} />
            </Container>
           <Grid.Container css={{alignItems: "center"}}>
                <Grid sm={6} xs={12} css={{justifyContent: "center"}}>
                    <Lottie
                        loop
                        animationData={lottieContact}
                        play
                        style={{ width: 350, height: 350 }}
                    />
                </Grid>
                <Grid sm={6} xs={12} css={{ justifyContent: "center" }}>
                    <form ref={form} onSubmit={sendEmail}>
                        <Grid.Container gap={4}>
                            <Grid sm={12}>
                                <Input
                                    css={{ width: "400px" }}
                                    bordered
                                    aria-labelledby='name'
                                    labelPlaceholder="Your Name"
                                    name='name'
                                    color="secondary" 
                                    required
                                    />
                            </Grid>
                            <Grid sm={12}>
                                <Input
                                    css={{ width: "400px" }}
                                    {...bindings}
                                    clearable
                                    shadow={false}
                                    onClearClick={reset}
                                    status={helper.color}
                                    color={helper.color}
                                    helperColor={helper.color}
                                    helperText={helper.text}
                                    type="email"
                                    label="Email"
                                    name='email'
                                    aria-labelledby='email'
                                    placeholder="With regex validation"
                                    bordered
                                    labelPlaceholder="Your Name"
                                    required
                                     />
                            </Grid>
                            <Grid sm={12}>
                                <Input
                                    css={{ width: "400px" }}
                                    clearable
                                    color="secondary"
                                    name="subject"
                                    type="text"
                                    label="subject"
                                    placeholder="Subject"
                                    bordered
                                    aria-labelledby='subject'
                                    labelPlaceholder="Subject"
                                    required
                                     />
                            </Grid>
                            <Grid sm={12}>
                                <Textarea css={{ width: "400px" }} name="message" placeholder="Write A Message" rows={6} required/>
                            </Grid>
                            <Grid>
                                <Input type="submit" status="primary" style={{ cursor: "pointer", width: "200px" }}/>
                            </Grid>
                        </Grid.Container>
                    </form>
                    
                </Grid>
           </Grid.Container>
        </div>
    );
};

export default Contact;