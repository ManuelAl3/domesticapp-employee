import * as S from "../../screen/index-page";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function CalendarStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}
    initialRouteName="CalendarIndex"
  >
      <Stack.Screen name="CalendarIndex" component={S.Calendar} />
      <Stack.Screen name="ReportCalendar" component={S.ReportCalendar} />

    </Stack.Navigator>
  );
}
