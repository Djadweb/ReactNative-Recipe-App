import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import recipes from './src/data/recipes.js';
import Recipe from './src/screens/Recipe.js';

export default function App() {    
  return (    
    <ScrollView>
      <View style={styles.container}>      
        {recipes.map((recipe, index) => (                
          <TouchableOpacity key={index} style={styles.card}>          
            <View style={styles.card__image}>            
              <Image             
                style={styles.image}
                source={recipe.image}
              />
            </View>
            <View style={styles.card__footer}>
              <Text style={styles.recipe_title}>{recipe.name}</Text>
            </View>          
          </TouchableOpacity>
        ))}
      </View>
      <Recipe/>
    </ScrollView>
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