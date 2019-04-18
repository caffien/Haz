import React, { Component } from 'react';
import { Card, Button, Section, TextInputt } from './common';

class Login extends Component {

    render() {
        return (

            <Card>
                <Section>
                    <TextInputt
                        label="الاسم "
                        placeholder=" الاسم"
                    />

                </Section>
                <Section>
                    <TextInputt
                        label="البريد الإلكتروني"
                        placeholder="البريد الإلكتروني"
                    />
                </Section>

                <Section>
                    <TextInputt
                        secureTextEntry
                        label="كلمة المرور"
                        placeholder="كلمة المرور"

                    />
                </Section>

                <Section>
                    <TextInputt
                        secureTextEntry
                        label="تاكيد كلمة المرور "
                        placeholder="تاكيدكلمة المرور "
                    />
                </Section>

                <Section>
                    <TextInputt
                        label=" رقم الجوال"
                        placeholder="رقم الجوال "

                    />
                </Section>

                <Section>
                    <Button>
                        تابع !
                    </Button>
                </Section>
            </Card>
        );
    }
}


export default Login;
