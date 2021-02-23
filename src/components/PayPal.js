import React, { useRef, useEffect } from 'react'
import { Redirect } from 'react-router-dom';

function PayPal(props) {
    const paypal = useRef();
    const { items, total } = props;
    const [paid, setPaid] = React.useState(false);
    const [error, setError] = React.useState(null);
    useEffect(()=> {
        window.paypal.Buttons({
            createOrder: (data, actions, err) => {
                return actions.order.create({
                    intent: "CAPTURE",
                    purchase_units: [
                        {
                            description: items,
                            amount: {
                                currency_code: "USD",
                                value: total,
                            },
                        },
                    ],
                });
            },
            onApprove: async (data, actions) => {
                const order = await actions.order.capture();
                setPaid(true)
            },
            onError: (err) => {
                console.log(err);
            },
        })
        .render(paypal.current)
    }, []);
    if (paid) {
        return <Redirect to="/success"/>
    }
    
    if (error) {
        return <div style={{color: "red"}}>Error Occurred in processing payment.! Please try again.</div>;
    }
    return (
        <div>
            <div ref={paypal}></div>
        </div>
    )
}

export default PayPal