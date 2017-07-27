# react-native-elastic-image-slider

react native elastic image slider component, including emoji

![emoticons](docs/demo.gif)

## Install

```js
npm install react-native-elastic-image-slider
```

## Usage

### UI Component

- step 1

	Import the component package.
	
	```js
	import ImageSlider from 'react-native-elastic-image-slider';
	```
- step 2

	Write the component code in the proper place of your page render.
	
	```js
	 let images = [
            {
                width: 150,
                height: 180,
                uri: 'http://chuantu.biz/t5/152/1501134247x2890173753.jpg'
            },
            {
                width: 200,
                height: 320,
                uri: 'http://chuantu.biz/t5/152/1501135055x3394041611.jpg'
            },
            {
                width: 200,
                height: 160,
                uri: 'http://chuantu.biz/t5/152/1501134194x2890173753.jpg'
            }
        ];
	<View style={{marginTop: 0,width:width}}>
                    <ImageSlide
                        images={images}
                        initialPosition={0}
                        />
     </View>
    ```
	
	
### props

| Prop | Type | Description | Required | Default |
|---|---|---|---|---|
|**`images`**|`array`| the images to slide |`Yes`|None|
|**`initialPosition`**|`number`| initial one of all images to show|`No`|`0`|
|**`style`**|`style`| custom style|`No`| None |
	
##	Thanks

Inspired by [react-native-image-slider](https://github.com/PaulBGD/react-native-image-slider)
