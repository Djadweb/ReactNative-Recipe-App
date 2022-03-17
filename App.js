import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

export default function App() {
  return (    
    <View style={styles.container}>
      <TouchableOpacity style={styles.card}>
        <View style={styles.card__image}>
          <Image             
            style={styles.image}
            source={require('./assets/Images/meal.jpg')}
          />
        </View>
        <View style={styles.card__footer}>
          <Text style={styles.recipe_title}>Best receipe in the world</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {    
    paddingVertical: 60,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    height: 280,
    width: '90%',
    //paddingHorizontal: 20,
    marginHorizontal: 'auto',
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',    
    //backgroundColor: '#ccc',
    borderRadius: 25,
    overflow: 'hidden',
  },
  card__image: {
    height: '80%'
  },
  image: {
    height: '100%',
    width: '100%',
  },
  card__footer: {
    padding: 20,    
  },
  recipe_title: {
    fontSize: 14,
    fontWeight: "bold",
  }
});