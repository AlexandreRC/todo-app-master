//npm install --save styled-components
import styled from 'styled-components';
//npm install --save polished
import { lighten, darken } from 'polished';

const handleSize = size => {
    switch (size) {
      case "sm":
        return "6px 12px";
      case "md":
        return "8px 16px";
      case "lg":
        return "11px 22px";
      default:
        return "8px 16px";
    }
  };

const StyledButton = styled.button`
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@500&display=swap');
    background: ${({variant, color}) => variant? 'white' : (color? color : '#E0E0E0')};
    border: ${({variant, color}) => (variant === 'outline'? `1px solid ${color? color : '#3F3F3F'}` : `none`)};
    color: ${({variant, color}) => variant? (color? color : '#3F3F3F') : color? 'white' : '#3F3F3F' };
    display: flex;
    gap: 8px;
    align-items: center;
    font-family: 'Noto Sans JP', sans-serif;
    font-size: 14px;
    cursor: pointer;
    border-radius: 6px;
    box-shadow: ${({disableShadow}) => disableShadow? 'none' : '0px 2px 3px rgba(51, 51, 51, 0.2)'};
    padding: ${({size}) => handleSize(size) };
    outline: none;
    &:hover , &:focus{
        background: ${({variant, color}) => (variant === 'text' || variant === 'outline')
            ? lighten(0.40, color? color : '#757575') 
            : darken(0.10, color? color : '#E0E0E0')};
    }
    &:disabled {
        background: #E0E0E0;
        color: #9E9E9E;
        cursor: no-drop;
        &:hover , &:focus {
          background: white;
        }
    }
`
const StyledIcon = styled.div`
    font-size: 16px;
`
const Button = (props) => {
    return (
        <StyledButton {...props} >
            {props.startIcon? <StyledIcon className='material-icons'>{props.startIcon}</StyledIcon> : null}
            {props.children}
            {props.endIcon? <StyledIcon className='material-icons'>{props.endIcon}</StyledIcon> : null}
        </StyledButton>
    )
}

export default Button;