import React from "react";
import { motion } from "framer-motion";
import { AnimationService } from "@/utils/animations";

export interface CardProps {
  children: React.ReactNode;
  variant?: "default" | "elevated" | "outlined" | "glass";
  padding?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  hover?: boolean;
  animation?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  variant = "default",
  padding = "md",
  className = "",
  onClick,
  hover = false,
  animation = true,
}) => {
  const baseClasses = "rounded-2xl transition-all duration-300";

  const variantClasses = {
    default: "bg-white shadow-lg",
    elevated: "bg-white shadow-xl hover:shadow-2xl",
    outlined: "bg-white border border-gray-200",
    glass: "bg-white/10 backdrop-blur-sm border border-white/20",
  };

  const paddingClasses = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  const hoverClass = hover ? "transform hover:-translate-y-2" : "";
  const clickableClass = onClick ? "cursor-pointer" : "";

  const classes = `${baseClasses} ${variantClasses[variant]} ${paddingClasses[padding]} ${hoverClass} ${clickableClass} ${className}`;

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  const CardWrapper = animation ? motion.div : "div";
  const animationProps = animation ? AnimationService.getHoverAnimation() : {};

  return (
    <CardWrapper className={classes} onClick={handleClick} {...animationProps}>
      {children}
    </CardWrapper>
  );
};

export default Card;
