import { render, screen, fireEvent } from '@testing-library/react';

// import your story from App.stories.js
import { Primary } from './App.stories';

// Add your tests here

test('button initial display', () => {
    render(<Primary />);
    const buttonElm = screen.getByRole('button');
    expect(buttonElm.textContent).toEqual('click me')
})

test('click button once', () => {
    render(<Primary />);
    const buttonElm = screen.getByRole('button');
    fireEvent.click(buttonElm);
    expect(buttonElm.textContent).toEqual('thanks')
})


test('click button twice', () => {
    render(<Primary />);
    const buttonElm = screen.getByRole('button');
    fireEvent.click(buttonElm);
    fireEvent.click(buttonElm);
    expect(buttonElm.textContent).toEqual('click me')
})


  
// See https://storybook.js.org/docs/react/writing-tests/importing-stories-in-tests#example-with-testing-library