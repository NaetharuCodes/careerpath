// src/components/auth/SignupModal.tsx
import React, { useState } from "react";
import { Button } from "@/components/ui/button/Button";
import { useAuth } from "@/contexts/auth/useAuth";
import Modal from "@/components/ui/modal/Modal";

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToLogin: () => void;
}

const SignupModal: React.FC<SignupModalProps> = ({
  isOpen,
  onClose,
  onSwitchToLogin,
}) => {
  const { register, isLoading, error } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [formError, setFormError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    // Validate passwords match
    if (password !== confirmPassword) {
      setFormError("Passwords do not match");
      return;
    }

    try {
      await register(name, email, password);
      // Close the modal if registration was successful
      onClose();
    } catch (err) {
      // Error is handled by the auth context
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Create Account">
      {(error || formError) && (
        <div className="bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-300 p-3 rounded mb-4">
          {formError || error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="name">
            Full Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded bg-background"
            required
          />
        </div>

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
            minLength={8}
          />
          <div className="text-xs text-muted-foreground mt-1">
            Password must be at least 8 characters
          </div>
        </div>

        <div>
          <label
            className="block text-sm font-medium mb-1"
            htmlFor="confirm-password"
          >
            Confirm Password
          </label>
          <input
            id="confirm-password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full p-2 border rounded bg-background"
            required
          />
        </div>

        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? "Creating account..." : "Create Account"}
        </Button>

        <div className="text-center mt-4">
          <span className="text-sm text-muted-foreground">
            Already have an account?{" "}
            <button
              type="button"
              className="text-primary hover:underline"
              onClick={onSwitchToLogin}
            >
              Sign in
            </button>
          </span>
        </div>
      </form>
    </Modal>
  );
};

export default SignupModal;
