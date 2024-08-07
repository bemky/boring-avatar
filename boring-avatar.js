import { hashCode, getUnit, getBoolean, getRandomColor, getContrast, uniqueId } from './utilities.js';

export default class BoringAvatar extends HTMLElement {
    
    static SIZE = 36
    
    constructor (props={}, ...args) {
        super(props, ...args)
        this.id = uniqueId('avatar-')
        props = Object.assign({
            colors: ['#92A1C6', '#146A7C', '#F0AB3D', '#C271B4', '#C20D90'],
            square: false,
            title: false,
            size: 40,
        }, props, this.dataset)
        if (Object.keys(props).length == 0) {
            Object.assign(props, this.dataset)
        }
        this.innerHTML = this.generate(props)
    }
    
    generate (props) {
        const data = this.generateData(props.name, props.colors)
        return `
          <svg
            viewBox='0 0 ${this.constructor.SIZE} ${this.constructor.SIZE}'
            fill="none"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            width='${props.size}'
            height='${props.size}'
          >
            ${!!props.title ? `<title>${props.name}</title>` : ''}
            <mask id=':${this.id}:' maskUnits="userSpaceOnUse" x=0 y=0 width='${this.constructor.SIZE}' height='${this.constructor.SIZE}'>
              <rect width='${this.constructor.SIZE}' height='${this.constructor.SIZE}' rx='${props.square ? '' : this.constructor.SIZE * 2}' fill="#FFFFFF" />
            </mask>
            <g mask='url(#:${this.id}:)'>
              <rect width='${this.constructor.SIZE}' height='${this.constructor.SIZE}' fill='${data.backgroundColor}' />
              <rect
                x="0"
                y="0"
                width='${this.constructor.SIZE}'
                height='${this.constructor.SIZE}'
                transform='translate(${data.wrapperTranslateX} ${data.wrapperTranslateY}) rotate(${data.wrapperRotate} ${this.constructor.SIZE / 2} ${this.constructor.SIZE / 2}) scale(${data.wrapperScale})'
                fill='${data.wrapperColor}'
                rx='${data.isCircle ? this.constructor.SIZE : this.constructor.SIZE / 6}'
              />
              <g
                transform='translate(${data.faceTranslateX} ${data.faceTranslateY}) rotate(${data.faceRotate} ${this.constructor.SIZE / 2} ${this.constructor.SIZE / 2})'
              >
              ${data.isMouthOpen ? `
                <path
                  d='M15 ${19 + data.mouthSpread}c2 1 4 1 6 0'
                  stroke='${data.faceColor}'
                  fill="none"
                  strokeLinecap="round"
                />
              ` : `
                <path
                  d='M13,${19 + data.mouthSpread} a1,0.75 0 0,0 10,0'
                  fill='${data.faceColor}'
                />
              `}
                <rect
                  x='${14 - data.eyeSpread}'
                  y='14'
                  width='1.5'
                  height='2'
                  rx='1'
                  stroke="none"
                  fill='${data.faceColor}'
                />
                <rect
                  x='${20 + data.eyeSpread}'
                  y='14'
                  width='1.5'
                  height='2'
                  rx='1'
                  stroke="none"
                  fill='${data.faceColor}'
                />
              </g>
            </g>
          </svg>
        `
    }
    
    generateData(name, colors) {
        const numFromName = hashCode(name);
        const range = colors && colors.length;
        const wrapperColor = getRandomColor(numFromName, colors, range);
        const preTranslateX = getUnit(numFromName, 10, 1);
        const wrapperTranslateX = preTranslateX < 5 ? preTranslateX + this.constructor.SIZE / 9 : preTranslateX;
        const preTranslateY = getUnit(numFromName, 10, 2);
        const wrapperTranslateY = preTranslateY < 5 ? preTranslateY + this.constructor.SIZE / 9 : preTranslateY;
        
        return {
            wrapperColor: wrapperColor,
            faceColor: getContrast(wrapperColor),
            backgroundColor: getRandomColor(numFromName + 13, colors, range),
            wrapperTranslateX: wrapperTranslateX,
            wrapperTranslateY: wrapperTranslateY,
            wrapperRotate: getUnit(numFromName, 360),
            wrapperScale: 1 + getUnit(numFromName, this.constructor.SIZE / 12) / 10,
            isMouthOpen: getBoolean(numFromName, 2),
            isCircle: getBoolean(numFromName, 1),
            eyeSpread: getUnit(numFromName, 5),
            mouthSpread: getUnit(numFromName, 3),
            faceRotate: getUnit(numFromName, 10, 3),
            faceTranslateX: wrapperTranslateX > this.constructor.SIZE / 6 ? wrapperTranslateX / 2 : getUnit(numFromName, 8, 1),
            faceTranslateY: wrapperTranslateY > this.constructor.SIZE / 6 ? wrapperTranslateY / 2 : getUnit(numFromName, 7, 2),
        }
    }
}
window.customElements.define('boring-avatar', BoringAvatar)