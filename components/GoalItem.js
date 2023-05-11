import { StyleSheet, View, Text, Pressable } from "react-native";

const GoalItem = (props) => {
    return (
        <Pressable 
			android_ripple={{color: '#210664'}} 
			onPress={props.onDeleteGoal.bind(this, props.id)}
			style={({ pressed }) => pressed && styles.pressedItem}>
			<View style={styles.goalItem}>
				<Text style={styles.goalText}>
					{props.text}
				</Text>
        	</View>
		</Pressable>
    )
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
		alignItems: 'center',
		margin: 10,
		width: '90%',
		borderRadius: 10,
		backgroundColor: '#5e0acc',
	},
	pressedItem: {
		opacity: 0.5
	},
	goalText: {
		color: '#fff',
		padding: 10
	},
})