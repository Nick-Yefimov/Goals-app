import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
	const [visibleModal, setVisibleModal] = useState(false);
	const [goals, setGoals] = useState([]);

	function openGoalHandler() {
		setVisibleModal(true);
	}

	function exitGoalHandler() {
		setVisibleModal(false);
	}

	function addGoalHandler(enteredGoalText) {
		setGoals(currentGoals => 
            [...goals, {text: enteredGoalText, key: Math.random().toString()}]);
		setVisibleModal(false);
	}

	function deleteGoalHandler(id) {
		setGoals(currentGoals => {
			return currentGoals.filter((goal) => goal.id !== id); 
		})
	}




	return (
		<>
			<StatusBar style='light'/>
			<View style={styles.container}>
				<View style={styles.addGoalButton}>
				<Button 
					title='Add New Goal' 
					color='#a065ec'
					onPress={openGoalHandler}/>
				</View>
				<GoalInput 
					visible={visibleModal} 
					onAddGoal={addGoalHandler} 
					onExit={exitGoalHandler}/>
				<View style={styles.goalsContainer}>
					<FlatList 
						alwaysBounceVertical={false} 
						data={goals} 
						renderItem={(itemData) => {
							return (
								<GoalItem 
									text={itemData.item.text}
									id={itemData.item.id} 
									onDeleteGoal={deleteGoalHandler}/>		
							)
					}}/>
				</View>
			</View>
		</>
  );
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 20,
		paddingHorizontal: 16,
		backgroundColor: '#1e085a',
	},
	addGoalButton: {
		marginTop: 20,
	},
	goalsContainer: {
		marginTop: 10,
		flex: 5,
	},
});
