import React, { useEffect, useRef, useState } from "react";
import { Platform, Linking } from "react-native";
import {
  StyleSheet,
  View,
  FlatList,
  Dimensions,
  Image,
  Text, 
  TouchableOpacity
} from "react-native";

const { width } = Dimensions.get("window");
const height = width * 0.5;

export default function Carousel(props)  {

    const [sliderIndex, setSliderIndex] = useState(0);
    const listRef = useRef(null);

    const scrollToIndex = (index, animated) => {
        if (listRef) {
            listRef.current && listRef.current.scrollToIndex({ index, animated });
        }
    };

    useEffect(() => {
        const intervalId = setInterval(function () {
            let nextIndex = 0;
            if (sliderIndex < props.images.length - 1) {
                nextIndex = sliderIndex + 1;
            }
            scrollToIndex(nextIndex, true);
            setSliderIndex(nextIndex);
        }, 3000);
        return () => clearInterval(intervalId);
    });

    const Correo = async ()=>{
      //&body=Detalles de mi presuepuesto:
      await Linking.openURL("mailto:recepcion@constructoreslogar.com?subject=PRESUPUESTO")
    }
    return (
        <View style={styles.container}>


            <FlatList
                style={styles.scrollContainer}
                ref={listRef}
                data={props.images}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                keyExtractor={(item) => item.img.toString()}
                renderItem={({ item, i }) => (
                    
                    <View key={i} style={{ height, width }}>
                        <Image
                            style={{ height, width }}
                            source={item.img}
                        />
                        <View style={styles.textContainer}>
                            <Text style={styles.text}>
                                {item.text}
                            </Text>
                            <TouchableOpacity style={styles.button} onPress={()=>Correo()} >
                                <Text style={styles.buttonText}>
                                   ¡PIDE TU PRESUPUESTO!
                                </Text>
                            </TouchableOpacity>
                        </View>
                        
                    </View>
                )}

                onMomentumScrollEnd={(event) => {
                    
                    const viewSize = event.nativeEvent.layoutMeasurement.width
                    const contentOffset = event.nativeEvent.contentOffset.x
                    const selectedIndex = Math.floor( contentOffset / viewSize)
                    setSliderIndex(selectedIndex)
                }}
                
            />
            
            <View style={styles.sliderContainer}>
                {props.images.map(function (item, index) {
                    return (
                        <View key={index} style={styles.sliderBtnContainer}>
                            <View style={styles.sliderBtn}>
                                {sliderIndex == index ? (
                                    <View style={styles.sliderBtnSelected} />
                                ) : null}
                            </View>
                        </View>
                    );
                })}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    height:height,
    width:width
  },
  scrollContainer: {
    flex: 1,
    width:width
  },
  sliderContainer: {
    flexDirection: "row",
    position: "absolute",
    top: "80%",
    alignSelf: "center",
  },
  sliderBtn: {
    height: 13,
    width: 13,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "white",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  sliderBtnSelected: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: "white",
  },
  sliderBtnContainer: {
    flexDirection: "row",
    marginBottom: 24,
  },
  textContainer:{
    marginTop:"-50%",
    width:"80%",
    flexWrap:"wrap",
    justifyContent:"center",
    alignSelf:"center", 
    alignItems:"center",
    height:"80%"
  },
  text:{
    fontWeight:"bold",
    fontSize:22,
    backgroundColor:"transparent",
    width:"100%",
    flexWrap:"wrap",
    textAlign:"center",
    color:"#fff"

  },
  button:{
    backgroundColor:"#001269",
    width:(Platform.OS ==="ios" ? "65%":"65%"),
    height:(Platform.OS ==="ios" ? "30%":"28%"),
    borderRadius:5

  },
  buttonText:{
    alignSelf:"center",
    alignItems:"center",
    justifyContent:"center",
    marginTop:(Platform.OS ==="ios" ? "8%":"6%"),
    fontWeight:"bold",
    color:"#fff",
    flexWrap:"wrap",
    fontSize:13
  }
})