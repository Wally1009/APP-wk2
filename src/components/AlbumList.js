import React from "react";
import { ScrollView, View } from "react-native";
import AlbumDetail from "./AlbumDetail";
import albumData from "../json/Albums.json";


const Albumlist = () => {
    return (
        <View>
            <AlbumDetail album={albumData[0]} />
            <AlbumDetail album={albumData[1]} />
            <AlbumDetail album={albumData[2]} />
            <AlbumDetail album={albumData[3]} />
            <AlbumDetail album={albumData[4]} />
        </View>


    );
};

export default Albumlist;