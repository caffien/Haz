import React from 'react';
import { View, Image, Platform } from 'react-native';
import shorthash from 'shorthash';

const RNFS = require('react-native-fs');

class CacheImage extends React.Component {

    state = { source: {} };

    componentDidMount() {
        const { uri } = this.props;
        const name = shorthash.unique(uri);
        const extension = (Platform.OS === 'android') ? 'file://' : '';
        const path = `${extension}${RNFS.CachesDirectoryPath}/${name}.png`;
        RNFS.exists(path)
            .then(exists => {
                if (exists) {
                    console.log('yeeeeey');
                    this.loadFile(path);
                } else {
                    this.downloadFile(uri, path);
                }
            })
            .catch(error => {
                console.log(error);
            });
    }

    loadFile = (path) => {
        this.setState({ source: { uri: path } });
    };

    downloadFile(uri, path) {
        console.log(uri);

        RNFS.downloadFile({ fromUrl: uri, toFile: path })
            .promise
            .then(res => this.loadFile(path))
            .catch(error => {
                console.log(error);
            });
    };

    render() {
        const { source } = this.state;
        const { style } = this.props;
        return <Image style{...style} source{...source} />;
    }
}

export default CacheImage;
