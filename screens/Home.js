import React,{useState} from 'react';
import { TextInput,Button,Card,Title } from 'react-native-paper';
import {View,Text,FlatList} from 'react-native'

const Home = ({navigation})=>{
    const btnClick = () => {
        if (checkAmt() && checkMon() && checkRate()==true) {
            navigation.navigate("Result",{textAmt:textAmt,textMon:textMon,textRate:textRate})
        }
    }
    const [textAmt, setTextAmt] = useState('');
    const [textMon, setTextMon] = useState('');
    const [textRate, setTextRate] = useState('');
    const checkAmt = () => {
        var regex = /^[0-9]+$/;
        if (textAmt.match(regex)) {
            return true;
        }else{
            alert("Input must be numbers");
            return false;
        }
    }
    const checkMon = () => {
        var regex = /^[0-9]+$/;
        if (textMon.match(regex)) {
            return true;
        }else{
            alert("Input must be numbers");
            return false;
        }
    }
    const checkRate = () => {
        var regex = /^\d+\.\d{0,2}$/;
        if (textRate.match(regex)) {
            return true;
        }else{
            alert("Only 2 decimal places allowed");
            return false;
        }
    }
    return(
        <View style={{ flex: 1 }}>
            <View style={{ alignItems: "center" }}>
                <Title
                    style={{
                        color: '#04124a',
                        marginTop: 50,
                        fontSize: 18,
                        fontWeight: "bold"
                    }}>
                    Loan EMI Calculator
                </Title>
            </View>
            <View style={{
                flexDirection: 'row',
                justifyContent:'space-between',
                margin: 10,
                marginTop: 25,
                alignItems: 'center'
            }}>
            <Text style={{
                    color: "black",
                    fontSize: 16,
                    fontWeight: "bold"
                }}>Loan Amount</Text>
            <TextInput
                    placeholder="Enter amount"
                    mode='outlined'
                    onChangeText={
                        (value) => setTextAmt(value)
                    }
                style={{
                    color: "black",
                    fontSize: 16,
                    fontWeight: "bold",
                    height:40,
                    width:190
                }}
            />
            <Text style={{
                    color: "black",
                    fontSize: 16,
                    fontWeight: "bold"
                }}>INR</Text>
            </View>
            <View style={{
                flexDirection: 'row',
                justifyContent:'space-between',
                margin: 10,
                marginTop: 25,
                alignItems: 'center'
            }}>
            <Text style={{
                    color: "black",
                    fontSize: 16,
                    fontWeight: "bold"
                }}>Loan Tenure</Text>
            <TextInput
                    placeholder="Enter months"
                    mode='outlined'
                    onChangeText={
                        (value) => setTextMon(value)
                    }
                style={{
                    color: "black",
                    fontSize: 16,
                    fontWeight: "bold",
                    height:40,
                    width:190
                }}
            />
            <Text style={{
                    color: "black",
                    fontSize: 16,
                    fontWeight: "bold"
                }}>Months</Text>
            </View>
            <View style={{
                flexDirection: 'row',
                justifyContent:'space-between',
                margin: 10,
                marginTop: 25,
                alignItems: 'center'
            }}>
            <Text style={{
                    color: "black",
                    fontSize: 16,
                    fontWeight: "bold"
                }}>Interest Rate</Text>
            <TextInput
                    placeholder="NN. NN"
                    mode='outlined'
                    onChangeText={
                        (value) => setTextRate(value)
                    }
                style={{
                    color: "black",
                    fontSize: 16,
                    fontWeight: "bold",
                    height:40,
                    width:190
                }}
            />
            <Text style={{
                    color: "black",
                    fontSize: 16,
                    fontWeight: "bold"
                }}>%</Text>
            </View>
            
            
            <Button
                mode="contained"
                color="#04124a"
                style={{ margin: 20 }}
                onPress={() => btnClick()}>
                <Text style={{
                    color: "white",
                    fontSize: 16,
                    fontWeight: "bold"
                }}>CALCULATE</Text>

            </Button>


        </View>
    )
}


export default Home