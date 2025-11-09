import { View, Text, TextInput, Pressable } from "react-native";
import { styles } from "@/styles/_joinstyle";
import { useRouter } from "expo-router";

export default function Join() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.titleTextGroup}>
        <Text style={styles.titleText}>Create an Account</Text>
        <Text style={styles.subText}>Sign up to get started!</Text>
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.formLabel}>Full Name</Text>
        <TextInput style={styles.formControl} placeholder="John Doe" />

        <Text style={styles.formLabel}>Email</Text>
        <TextInput style={styles.formControl} placeholder="email@example.com" />

        <Text style={styles.formLabel}>Password</Text>
        <TextInput
          style={styles.formControl}
          placeholder="********"
          secureTextEntry
        />

        <Pressable style={styles.primaryButton}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </Pressable>
      </View>

      <View style={styles.signupgroup}>
        <Text style={styles.signupTitleText}>Already have an account? </Text>
        <Text
          style={styles.signupSubTitleText}
          onPress={() => router.push("/signin")}
        >
          Sign In
        </Text>
      </View>
    </View>
  );
}
