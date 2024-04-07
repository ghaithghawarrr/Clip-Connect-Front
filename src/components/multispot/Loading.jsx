import React from "react";
import { useLottie } from "lottie-react";
import loading from "../../assets/animation/loading.json";

export default function Loading() {
      const options = {
            animationData: loading,
            loop: true
      };
      const { View } = useLottie(options);
      return (<div style={{ width: "70px" }}>{View}</div>);
};
