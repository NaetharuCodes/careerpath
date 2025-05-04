// src/components/auth/LoginModal.tsx
import React, { useState } from "react";
import { Button } from "@/components/ui/button/Button";
import { useAuth } from "@/contexts/auth/useAuth";
import Modal from "../modal/Modal";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToSignup: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({
  isOpen,
  onClose,
  onSwitchToSignup,
}) => {
  const { login, isLoading, error } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await login(email, password);
      // Close the modal if login was successful
      onClose();
    } catch (err) {
      // Error is handled by the auth context
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Sign In">
      {error && (
        <div className="bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-300 p-3 rounded mb-4">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded bg-background"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded bg-background"
            required
          />
          <div className="text-right mt-1">
            <a
              href="#forgot-password"
              className="text-sm text-primary hover:underline"
              onClick={(e) => {
                e.preventDefault();
                // Handle forgot password flow
              }}
            >
              Forgot password?
            </a>
          </div>
        </div>

        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? "Signing in..." : "Sign In"}
        </Button>

        <div className="text-center mt-4">
          <span className="text-sm text-muted-foreground">
            Don't have an account?{" "}
            <button
              type="button"
              className="text-primary hover:underline"
              onClick={onSwitchToSignup}
            >
              Sign up
            </button>
          </span>
        </div>
      </form>
    </Modal>
  );
};

export default LoginModal;
