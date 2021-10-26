import React,{useState,useEffect} from 'react';
import { TextInput,Button,Card,Title } from 'react-native-paper';
import {View,Text,FlatList} from 'react-native'

const Result = ({navigation,route})=>{
    
    const btnClick = ()=>{
        navigation.navigate("Home")
    }
    const { textAmt,textMon,textRate } = route.params
    let E = 0;
    let T = 0;
    let I = 0;
    function emi(){
        let numer = Math.pow((1+textRate/12/100),textMon);
        let denum = numer-1;
        let ratio = numer/denum
        let ans = textAmt*(textRate/12/100)*ratio
        E = Math.round(ans)
        console.log(E)
        return E
    }
    function total(){
        let ans=E*textMon
        T = Math.round(ans)
        console.log(T)
        return T
    }
    function interest(){
        let ans=E*textMon-textAmt
        I = Math.round(ans)
        console.log(I)
        return I
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
                label={textAmt}
                mode='outlined'
                disabled='true'
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
                label={textMon}
                mode='outlined'
                disabled='true'
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
                label={textRate}
                mode='outlined'
                disabled='true'
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
                }}>RESET</Text>

            </Button>
            <View style={{
                borderBottomColor: 'black',
                borderBottomWidth: 1,
            }} />

            <View style={{ alignItems: "center" }}>
                <Title
                    style={{
                        color: '#04124a',
                        marginTop: 15,
                        fontSize: 18,
                        fontWeight: "bold"
                    }}>
                    Loan EMI Calculator
                </Title>
            </View>
            <View  style={{
                flexDirection: 'row',
                justifyContent:'space-around',
                marginTop: 25,
                alignItems: 'center'
            }}>
                <Card style={{
                    margin: 5,
                    padding: 18,
                    width:165,
                    backgroundColor: '#f5e4b3'
                }}>
                    <Title style={{ color: "black",fontSize: 12.5,fontWeight: 'bold',textAlign: 'center' }}>Loan EMI</Title>
                    <Title style={{ color: "black",fontSize: 12.5,fontWeight: 'bold',textAlign: 'center' }}>{'\u20B9'}{emi(E)}</Title>
                </Card>
                <Card style={{
                    margin: 5,
                    padding: 18,
                    width:165,
                    backgroundColor: '#c8f2f7'
                }}>
                    <Title style={{ color: "black",fontSize: 12.5,fontWeight: 'bold',textAlign: 'center' }}>Total Interest Payable</Title>
                    <Title style={{ color: "black",fontSize: 12.5,fontWeight: 'bold',textAlign: 'center' }}>{'\u20B9'}{interest(I)}</Title>
                </Card>
            </View>
            <View>
                <Card style={{
                    margin: 10,
                    padding: 18,
                    backgroundColor:'#e2d0f5'
                }}>
                    <Title style={{ color: "black",fontSize: 12.5,fontWeight: 'bold',textAlign: 'center' }}>Total Payment(Principle+Interest) </Title>
                    <Title style={{ color: "black",fontSize: 12.5,fontWeight: 'bold',textAlign: 'center' }}>{'\u20B9'}{total(T)}</Title>
                </Card>
            </View>
        </View>
    )
}


export default Result