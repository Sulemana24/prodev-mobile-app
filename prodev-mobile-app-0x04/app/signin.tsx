import { View, Text, TextInput, Pressable } from "react-native";
import { styles } from "@/styles/_joinstyle";
import { useRouter } from "expo-router";

export default function SignIn() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.titleTextGroup}>
        <Text style={styles.titleText}>Welcome Back</Text>
        <Text style={styles.subText}>Sign in to continue</Text>
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.formLabel}>Email</Text>
        <TextInput style={styles.formControl} placeholder="email@example.com" />

        <Text style={styles.formLabel}>Password</Text>
        <TextInput
          style={styles.formPasswordControl}
          placeholder="********"
          secureTextEntry
        />

        <Pressable style={styles.primaryButton}>
          <Text style={styles.buttonText}>Sign In</Text>
        </Pressable>
      </View>

      <View style={styles.signupgroup}>
        <Text style={styles.signupTitleText}>Dont have an account? </Text>
        <Text
          style={styles.signupSubTitleText}
          onPress={() => router.push("/join")}
        >
          Join Now
        </Text>
      </View>
    </View>
  );
}
