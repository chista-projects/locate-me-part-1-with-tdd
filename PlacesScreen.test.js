import PlacesScreen from "./screens/PlacesScreen";

import { render, fireEvent, screen, within } from "@testing-library/react-native";

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


// Silence the warning: Animated: `useNativeDriver` is not supported...
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');




it('Input\'s placeholder ', () => {
    render(<PlacesScreen />);
    const placeholder = screen.queryByPlaceholderText(/new city/i);
    expect(placeholder).toBeTruthy();
});



it('Add button', () => {
    render(<PlacesScreen />);
    const btn = screen.getByText(/add/i, { selector: 'button' });
    expect(btn).toBeTruthy();
})