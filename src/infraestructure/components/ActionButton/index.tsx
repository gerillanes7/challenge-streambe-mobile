import { TouchableOpacity, StyleSheet } from "react-native"
import { IActionButton, IIcon } from "./types"
import { getHP, getWP } from "../../utils/dimensions"


export const ActionButton = ({icon, onPress}: IActionButton) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            {icon}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: getWP(12),
        height: getHP(6),
        backgroundColor: '#F66262',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
    }
})