# `BoringAvatar`

`BoringAvatar` is a [Custom Element](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements) version of [boringdesigners/boring-avatars](https://github.com/boringdesigners/boring-avatars) that generates custom, SVG-based, round avatars from any username and color palette.

## Install
    npm install github:bemky/boring-avatar

## Usage

```javascript
import BoringAvatar from 'boring-avatar';

document.append(new BoringAvatar({name: 'Ben Ehmke'}))
```

or
```html
<boring-avatar data-name="Ben Ehmke"></boring-avatar>
````

### Props

| Prop    | Type                                                         | Default                                                   |
|---------|--------------------------------------------------------------|-----------------------------------------------------------|
| size    | number or string                                             | `40px`                                                    |
| square  | boolean                                                      | `false`                                                   |
| title   | boolean                                                      | `false`                                                   |
| name    | string                                                       | `Clara Barton`                                            |
| colors  | array                                                        | `['#92A1C6', '#146A7C', '#F0AB3D', '#C271B4', '#C20D90']` | 

### Name
The `name` prop is used to generate the avatar. It can be the username, email or any random string.


#### Size
The `size` prop is used to change the size of the avatar.


#### Colors
The `colors` prop is used to change the color palette of the avatar.


#### Square
The `square` prop is used to make the avatar square.
