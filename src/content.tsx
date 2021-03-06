import ContentWrapper from 'pages/ContentWrapper';
import renderRoot from './tools/renderRoot';

function Content(props) {
  return (
    <ContentWrapper />
  )
}

const div = document.createElement('div');
div.id = 'statice-div';
div.style.position = 'fixed';
div.style.top = '0';
div.style.left = '0';
div.style.right = '0';
div.style.bottom = '0';
div.style.pointerEvents = 'none';
renderRoot(() => <Content />, div);
document.body.appendChild(div);