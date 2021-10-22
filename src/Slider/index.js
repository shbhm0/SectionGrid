import React from 'react';
import {Image, ScrollView, View} from 'react-native';
import SliderButton from '../sliderButton';
import styles from './styles';
export default function ImageSlider(props) {
  const [selectedDot, setSelectedDot] = React.useState(0);
  const scrollRef = React.createRef();

  const setSelectedIndex = event => {
    const viewSize = event.nativeEvent.layoutMeasurement.width;
    const contentOffset = event.nativeEvent.contentOffset.x;
    const selectedIndex = Math.floor(contentOffset / viewSize);
    setSelectedDot(selectedIndex);
  };
  return (
    <View style={{backgroundColor: '#fff', paddingBottom: 40}}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        horizontal
        style={styles.scrollview}
        ref={scrollRef}
        onMomentumScrollEnd={setSelectedIndex}>
        {props.data.map((item, index) => {
          {
            return item.image_url != '' ? (
              <Column key={index} style={{backgroundColor: '#afafaf'}}>
                <Image style={styles.image} source={{uri: item.image_url}} />
                <H1
                  position="absolute"
                  top={240}
                  left={25}
                  color={'white'}
                  fontSize={30}
                  numberOfLines={1}
                  marginRight={25}
                  fontWeight={'semibold'}>
                  {item.quote}
                </H1>
                <SliderButton Image={item.image_url} Text={item.name} />
              </Column>
            ) : null;
          }
        })}
      </ScrollView>
      <View style={styles.dotBox}>
        {props.data.map((item, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              {
                height: index === selectedDot ? 8 : 6,
                width: index === selectedDot ? 8 : 6,
                backgroundColor: index === selectedDot ? '#000' : '#777',
              },
            ]}
          />
        ))}
      </View>
    </View>
  );
}
