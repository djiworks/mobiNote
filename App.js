import { StackNavigator } from 'react-navigation';

import ClassesScreen from './screens/Classes';
import StudentsScreen from './screens/Students';
import StudentScreen from './screens/StudentDetails';

export default StackNavigator({
  Home: { screen: ClassesScreen },
  Students: { screen: StudentsScreen },
  Student: { screen: StudentScreen },
});
