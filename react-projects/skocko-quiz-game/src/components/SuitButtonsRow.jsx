import React from "react";
import SuitButton from "./SuitButton";
import StarSuit from "./StarSuit";
import ClubSuit from "./ClubSuit";
import SpadeSuit from "./SpadeSuit";
import HeartSuit from "./HeartSuit";
import DiamondSuit from "./DiamondSuit";
import SkockoSuit from "./SkockoSuit";

const SuitButtonsRow = ({ pushSuit }) => {
  return (
    <div className="flex gap-5 mb-6">
      <SuitButton suit={<StarSuit />} pushSuit={() => pushSuit(<StarSuit value={"StarSuit"} />)} />
      <SuitButton suit={<ClubSuit />} pushSuit={() => pushSuit(<ClubSuit value={"ClubSuit"} />)} />
      <SuitButton suit={<SpadeSuit />} pushSuit={() => pushSuit(<SpadeSuit value={"SpadeSuit"} />)} />
      <SuitButton suit={<HeartSuit />} pushSuit={() => pushSuit(<HeartSuit value={"HeartSuit"} />)} />
      <SuitButton suit={<DiamondSuit />} pushSuit={() => pushSuit(<DiamondSuit value={"DiamondSuit"} />)} />
      <SuitButton suit={<SkockoSuit />} pushSuit={() => pushSuit(<SkockoSuit value={"SkockoSuit"} />)} />
    </div>
  );
};

export default SuitButtonsRow;
