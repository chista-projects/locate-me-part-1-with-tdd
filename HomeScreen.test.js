import HomeScreen from "./screens/HomeScreen";

import { render, fireEvent, screen } from "@testing-library/react-native";

// Silence the warning: Animated: `useNativeDriver` is not supported...
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');



it('Input\'s placeholder ', () => {
    render(<HomeScreen />)

    const placeholder = screen.queryByPlaceholderText(/Nickname/i);
    expect(placeholder).toBeTruthy();
});



it('Go to map button ', () => {
    render(<HomeScreen />)

    const button = screen.queryByText(/go to map/i);
    expect(button).toBeTruthy();
});


it('Navigation to MapScreen', () => {
    render(<HomeScreen />);
    const push = jest.fn();

    const { getByText } = render(<HomeScreen navigation={{ navigate: push }} />);

    fireEvent.press(getByText('Go to map'));
    expect(push).toHaveBeenCalledWith("TabNavigator");
});