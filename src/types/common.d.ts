// Add these imports for type definition
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ParamListBase} from '@react-navigation/routers';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

export type IScreen = 'Login' | 'Register';

// Use `RouteProp` and `ParamListBase` to define the type for navigation
type IScreenNavigation = NativeStackNavigationProp<ParamListBase, IScreen>;
