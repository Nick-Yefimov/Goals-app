import { StyleSheet, View, Button, TextInput, Modal, Image, Systrace } from "react-native";
import { useState } from "react";
const GoalInput = (props) => {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText) {
		setEnteredGoalText(enteredText);
	}

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText)
        setEnteredGoalText('');
    }
    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image 
                    style={styles.image} 
                    source={require('../assets/goal.png')}/>
                <TextInput 
                    placeholder='Your Goal!' 
                    style={styles.input}
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}/>
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button     
                                title='Add goal' 
                                onPress={addGoalHandler}
                                color='#5e0acc'/>
                        </View>
                        <View style={styles.button}>
                            <Button 
                                title='Cancel' 
                                onPress={props.onExit}
                                color='#f31282'/>
                        </View>
                    </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        padding: 8,
        justifyContent: 'center',	
        alignItems: 'center',
        backgroundColor: '#311b6b'
    },
    image: {
        width: 100,
        height: 100,
        margin: 20,

    },
    input: {
        color: '#fff',
        padding: 16,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        width: '100%',
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 16,
    },
    button: {
        width: 100,
        marginHorizontal: 8,

    }
})



export default GoalInput;