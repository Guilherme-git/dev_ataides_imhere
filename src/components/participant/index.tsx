import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';

type Props = {
    name: String;
    onRemove: () => void
}

export default function Participant({name, onRemove}: Props) {
  return (
    <View style={styles.container}>
        <Text style={styles.name}>{name}</Text>
        
        <TouchableOpacity style={styles.btn} onPress={onRemove}>
          <Text style={styles.btnText}>-</Text>
        </TouchableOpacity>
    </View>
  );
}