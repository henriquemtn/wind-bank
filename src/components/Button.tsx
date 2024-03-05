import { Text, TouchableOpacity, ViewStyle } from "react-native";
import React from "react";

type Props = {
  title: string;
  onPress: any;
  outline?: boolean;
  blue?: boolean;
};

export default function Button({ title, onPress, outline, blue }: Props) {
  const textColor = blue ? "#FFFFFF" : outline ? "#000000" : "#000000";

  const buttonStyle: ViewStyle = {
    justifyContent: "center",
    marginBottom: 7,
    alignItems: "center",
    width: "100%",
    height: 48,
    padding: 10,
    borderRadius: 8,
    backgroundColor: blue ? "#222222" : "transparent",
    borderWidth: outline ? 1 : 0,
    borderColor: outline ? "black" : "transparent",
  };

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={{ color: textColor }}>{title}</Text>
    </TouchableOpacity>
  );
}
