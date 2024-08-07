<svg viewBox="0 0 36 36" fill="none" role="img" xmlns="http://www.w3.org/2000/svg" width="undefined" height="undefined">
            
    <mask id=":avatar-1:" maskUnits="userSpaceOnUse" x="0" y="0" width="36" height="36">
        <rect width="36" height="36" rx="72" fill="#FFFFFF"></rect>
    </mask>
    <g mask="url(#:avatar-1:)">
        <rect width="36" height="36" fill="#dd2e4d"></rect>
        <rect x="0" y="0" width="36" height="36" transform="translate(1 7) rotate(103 18 18) scale(1.1)" fill="#76b94a" rx="36"></rect>
        <g transform="translate(-7 3.5) rotate(3 18 18)">
              
            <path d="M13,20 a1,0.75 0 0,0 10,0" fill="#000000"></path>
              
            <rect x="11" y="14" width="1.5" height="2" rx="1" stroke="none" fill="#000000"></rect>
            <rect x="23" y="14" width="1.5" height="2" rx="1" stroke="none" fill="#000000"></rect>
        </g>
    </g>
</svg>

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