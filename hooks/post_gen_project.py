#!/usr/bin/env python
import os
import shutil
import sys
import subprocess
from pathlib import Path

def remove_file(filepath):
    """Remove a file if it exists."""
    if os.path.exists(filepath):
        os.remove(filepath)
        print(f"  Removed file: {filepath}")

def remove_directory(dirpath):
    """Remove a directory and its contents if it exists."""
    if os.path.exists(dirpath):
        shutil.rmtree(dirpath)
        print(f"  Removed directory: {dirpath}")

def run_command(cmd, description=None):
    """Run a shell command and return success status."""
    if description:
        print(f"  {description}...")
    try:
        result = subprocess.run(cmd, shell=True, capture_output=True, text=True)
        return result.returncode == 0
    except Exception as e:
        print(f"  ⚠️ Command failed: {e}")
        return False

def setup_git_repository():
    """Initialize Git repository and set up GitHub remote."""
    github_username = '{{ cookiecutter.github_username }}'
    project_slug = '{{ cookiecutter.project_slug }}'

    print("🔧 Setting up Git repository...")

    # Initialize git if not already initialized
    if not os.path.exists('.git'):
        if run_command('git init', 'Initializing Git repository'):
            print("  ✅ Git repository initialized")

    # Add remote if GitHub username is provided
    if github_username and github_username != 'your-github-username':
        remote_url = f'https://github.com/{github_username}/{project_slug}.git'
        if run_command(f'git remote add origin {remote_url}', f'Adding GitHub remote: {remote_url}'):
            print("  ✅ GitHub remote added")

    # Create initial commit
    if run_command('git add .', 'Staging files'):
        run_command('git commit -m "Initial commit with Claude Code PM integration"', 'Creating initial commit')

def create_setup_script():
    """Create a setup script for Node.js environment."""
    script_content = """#!/bin/bash
# Quick setup script for {{ cookiecutter.project_name }}

echo "🚀 Setting up {{ cookiecutter.project_name }}..."

# Install dependencies
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Set up environment
if [ ! -f ".env.local" ] && [ -f ".env.example" ]; then
    echo "🔧 Creating .env.local from .env.example..."
    cp .env.example .env.local
fi

# Run type checking
echo "🔍 Running type check..."
npm run type-check

# Run linting
echo "📝 Running linter..."
npm run lint

echo "✅ Setup complete! Run 'npm run dev' to start development."
"""

    with open('setup.sh', 'w') as f:
        f.write(script_content)
    os.chmod('setup.sh', 0o755)
    print("  ✅ Created setup.sh script")

def main():
    """Post-generation cleanup and setup."""
    # Get configuration
    use_claude_pm = '{{ cookiecutter.use_claude_pm }}' == 'y'
    # Check if use_github exists in cookiecutter config
    use_github = False
    github_username = '{{ cookiecutter.github_username }}'
    if github_username and github_username != 'your-github-username':
        use_github = True

    print("\n🎉 Project {{ cookiecutter.project_name }} generated successfully!")
    print("=" * 60)

    # If PM system is not enabled, remove .claude directory
    if not use_claude_pm:
        print("\n🧹 Removing Claude Code PM system files...")
        remove_directory('.claude')
        remove_file('COMMANDS.md')
        print("  ✅ PM system files removed")
    else:
        print("\n✨ Claude Code PM System included!")
        print("  📚 Documentation: .claude/CLAUDE.md")
        print("  🛠️ Commands: .claude/scripts/pm/")
        print("  🤖 Agents: .claude/AGENTS.md")

        # Make PM scripts executable
        pm_scripts_dir = Path('.claude/scripts/pm')
        if pm_scripts_dir.exists():
            for script in pm_scripts_dir.glob('*'):
                if script.is_file():
                    script.chmod(0o755)
            print("  ✅ PM scripts made executable")

    # Setup Git repository if requested
    if use_github:
        print()
        setup_git_repository()

    # Create setup script
    print("\n📝 Creating setup utilities...")
    create_setup_script()

    # Print next steps
    print("\n" + "=" * 60)
    print("📋 Next Steps:")
    print("=" * 60)
    print("1. Navigate to your project: cd {{ cookiecutter.project_slug }}")
    print("2. Run the setup script: ./setup.sh")

    if use_claude_pm:
        print("3. Initialize PM system: bash .claude/init.sh")
        print("4. Plan your first epic: .claude/scripts/pm/epic-plan")

    print("5. Start development: npm run dev")

    if use_github and '{{ cookiecutter.github_username }}' != 'your-github-username':
        print(f"6. Push to GitHub: git push -u origin main")

    print("\n💡 Tips:")
    if use_claude_pm:
        print("  • Use PM commands to manage your development workflow")
        print("  • Run tests with: npm run test")
        print("  • Check types with: npm run type-check")
        print("  • Fix linting: npm run lint:fix")
    else:
        print("  • Run tests with: npm run test")
        print("  • Build for production: npm run build")
        print("  • Check bundle size: npm run analyze")

    print("\n🚀 Happy coding!")

if __name__ == '__main__':
    main()