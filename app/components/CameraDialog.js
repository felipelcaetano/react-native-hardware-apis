import React, { Component } from 'React';
import { StyleSheet, View, Image, Modal, TouchableOpacity, Text, Button } from 'react-native';

class CameraDialog extends Component {

    static defaultProps = {
        isOpen: false,
        onClose: () => {}
    }

    state = {
        currentImage: 'https://s03.video.glbimg.com/x720/7530370.jpg'
    }

    save = () => {
        this.props.onClose();
    }

    shot = () => {

    }

    getImageFromClipboard = () => {

    }

    render() {
        const { props, state } = this;
        return (
            <Modal
                transparent={false}
                visible={props.isOpen}
                animationType="slide"
            >
                <View style={styles.modalView}>
                    <View style={styles.previewContainer}>
                        <Image source={{uri: state.currentImage}} style={styles.preview}/>
                        <TouchableOpacity onPress={props.onClose}>
                            <Text style={styles.closeButton}>X</Text>
                        </TouchableOpacity>
                    </View>
                    <View>

                    </View>
                    <View style={styles.buttonContainer}>  
                        <Button
                            title="Salvar"
                            onPress={this.save}
                            color="#0062ac"
                        />
                        <Button
                            title="Bater"
                            onPress={this.shot}
                            color="#0062ac"
                        />
                        <Button
                            title="Colar"
                            onPress={this.getImageFromClipboard}
                            color="#0062ac"
                        />
                    </View>
                </View>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    modalView: {
        flex: 1
    },
    previewContainer: {
        backgroundColor: "#CACACA",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    preview: {
        width: 100,
        height: 75,
        borderWidth: 2,
        borderColor: 'black'
    },
    closeButton: {
        padding: 15,
        backgroundColor: 'red',
        fontSize: 20,
        color: 'white'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 40,
        backgroundColor: 'grey'
    }
})

export default CameraDialog;