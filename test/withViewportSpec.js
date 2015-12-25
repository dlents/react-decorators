import ReactTestUtils from 'react-addons-test-utils';
import { describe, it } from 'mocha';
import { expect } from 'chai';
import withViewport from '../src/withViewport.js';


describe('withViewport', () => {

  it('Should set a default viewport', () => {
    class MyComponent { }

    const ViewportComponent = withViewport(MyComponent);
    const renderer = ReactTestUtils.createRenderer();

    renderer.render(<ViewportComponent />);
    const output = renderer.getRenderOutput();

    expect(output._store.props.viewport).to.exist;
    expect(output._store.props.viewport).to.deep.equal({ width: 1366, height: 768 });
  });

});
